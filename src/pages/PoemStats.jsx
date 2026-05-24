import './styles/PoemStats.css';
import { useLanguage } from '../language.js';

const TOP_LIMIT = 6;

function parsePoemBlocks(content = '') {
    const blocks = content
        .replace(/\r\n/g, '\n')
        .trim()
        .split(/\n\s*\n/)
        .map((block) => block.split('\n').map((line) => line.trim()).filter(Boolean))
        .filter((lines) => lines.length > 1);

    let previousTitle = '';

    return blocks.map((lines) => {
        const rawTitle = lines[0];
        const resolvedTitle = rawTitle === '又' && previousTitle ? previousTitle : rawTitle;
        if (rawTitle !== '又') previousTitle = rawTitle;

        const [baseTitle, ...subtitleParts] = resolvedTitle.split(/\s+/);
        const bodyLines = lines.slice(1);
        const body = bodyLines.join('');
        const characterCount = Array.from(body.replace(/[^\p{L}\p{N}]/gu, '')).length;

        return {
            title: resolvedTitle,
            baseTitle: baseTitle || resolvedTitle,
            subtitle: subtitleParts.join(' '),
            lineCount: bodyLines.length,
            characterCount,
        };
    });
}

function buildStats(content, t) {
    const works = parsePoemBlocks(content);
    const totalWorks = works.length;
    const totalLines = works.reduce((sum, item) => sum + item.lineCount, 0);
    const totalCharacters = works.reduce((sum, item) => sum + item.characterCount, 0);
    const longestWork = works.reduce((longest, item) => (
        item.characterCount > (longest?.characterCount ?? 0) ? item : longest
    ), null);

    const titleCounts = works.reduce((acc, item) => {
        acc[item.baseTitle] = (acc[item.baseTitle] || 0) + 1;
        return acc;
    }, {});

    const sortedEntries = Object.entries(titleCounts)
        .map(([title, count]) => ({
            title,
            count,
            percent: totalWorks ? count / totalWorks : 0,
        }))
        .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title, 'zh-Hans-CN'));

    const topEntries = sortedEntries.slice(0, TOP_LIMIT);
    const topTotal = topEntries.reduce((sum, item) => sum + item.count, 0);
    const otherCount = totalWorks - topTotal;
    const displayEntries = otherCount > 0
        ? [...topEntries, { title: t('statsOther'), count: otherCount, percent: otherCount / totalWorks }]
        : topEntries;

    return {
        totalWorks,
        totalLines,
        totalCharacters,
        averageCharacters: totalWorks ? Math.round(totalCharacters / totalWorks) : 0,
        longestWork,
        displayEntries,
    };
}

export default function PoemStats({ currentCard }) {
    const { t } = useLanguage();
    const stats = buildStats(currentCard?.content, t);
    const accentColor = currentCard?.color || '53, 92, 125';

    if (!stats.totalWorks) {
        return <p className="poem-stats-empty">{t('statsEmpty')}</p>;
    }

    return (
        <section className="poem-stats" style={{ '--poem-accent': accentColor }}>
            <div className="poem-stats-summary" aria-label={t('statsSummaryLabel')}>
                <div className="poem-stats-metric">
                    <span>{stats.totalWorks}</span>
                    <small>{t('statsWorks')}</small>
                </div>
                <div className="poem-stats-metric">
                    <span>{stats.totalCharacters}</span>
                    <small>{t('statsCharacters')}</small>
                </div>
                <div className="poem-stats-metric">
                    <span>{stats.totalLines}</span>
                    <small>{t('statsLines')}</small>
                </div>
                <div className="poem-stats-metric">
                    <span>{stats.averageCharacters}</span>
                    <small>{t('statsAverageCharacters')}</small>
                </div>
            </div>

            <div className="poem-stats-feature">
                <span>{t('statsLongestWork')}</span>
                <strong>{stats.longestWork?.title}</strong>
                <em>{stats.longestWork?.characterCount} {t('unitCharacter')}</em>
            </div>

            <div className="poem-stats-bars" aria-label={t('statsTitleRatioLabel')}>
                {stats.displayEntries.map((item) => (
                    <div className="poem-stats-row" key={item.title}>
                        <div className="poem-stats-row-label">
                            <span>{item.title}</span>
                            <small>{item.count} {t('unitPoem')}</small>
                        </div>
                        <div className="poem-stats-track" aria-hidden="true">
                            <div
                                className="poem-stats-fill"
                                style={{ width: `${Math.max(item.percent * 100, 3)}%` }}
                            />
                        </div>
                        <strong>{(item.percent * 100).toFixed(1)}%</strong>
                    </div>
                ))}
            </div>
        </section>
    );
}
