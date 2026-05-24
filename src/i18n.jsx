import { useMemo, useState } from 'react';
import { LanguageContext } from './language.js';

const LANGUAGE_STORAGE_KEY = 'ci-app-language';
const DEFAULT_LANGUAGE = 'zh';
const SUPPORTED_LANGUAGES = ['zh', 'ja'];

const messages = {
    zh: {
        siteTitle: '宋词札记',
        siteSubtitle: '记忆与感知的流动',
        navPoems: '词集索引',
        navTools: '词牌助手',
        homeTryWriting: '想试试自己填一首词？',
        homeOpenAssistant: '打开填词助手',
        footerFull: '© 2025 Eliot Hongtuo · 以词为舟，泛古今之思。',
        footerShort: '© 2025 Eliot Hongtuo · 以词为舟，泛古今',
        languageChinese: '中文',
        languageJapanese: '日本語',
        createdAt: '创作时间',
        description: '简介',
        expand: '展开',
        collapse: '收起',
        composition: '作品构成',
        noPoemCollection: '暂无词集数据',
        poemNotFound: '未找到对应词集：',
        startByChoosingCiPai: '选择词牌以开始',
        currentCiPai: '当前词牌：',
        noContent: '暂无内容',
        statsEmpty: '暂无可统计作品',
        statsSummaryLabel: '作品统计概览',
        statsWorks: '作品',
        statsCharacters: '有效字数',
        statsLines: '正文行',
        statsAverageCharacters: '篇均字数',
        statsLongestWork: '最长篇目',
        statsTitleRatioLabel: '词牌占比',
        statsOther: '其他',
        unitCharacter: '字',
        unitPoem: '首',
    },
    ja: {
        siteTitle: '宋詞札記',
        siteSubtitle: '記憶と感知の流れ',
        navPoems: '詞集索引',
        navTools: '詞牌アシスタント',
        homeTryWriting: '自分でも詞を作ってみますか？',
        homeOpenAssistant: '詞作アシスタントを開く',
        footerFull: '© 2025 Eliot Hongtuo · 詞を舟として、古今の思いを渡る。',
        footerShort: '© 2025 Eliot Hongtuo · 詞を舟として、古今を渡る',
        languageChinese: '中文',
        languageJapanese: '日本語',
        createdAt: '作成時期',
        description: '紹介',
        expand: '展開',
        collapse: '閉じる',
        composition: '作品構成',
        noPoemCollection: '詞集データがありません',
        poemNotFound: '対応する詞集が見つかりません：',
        startByChoosingCiPai: '詞牌を選んで開始',
        currentCiPai: '現在の詞牌：',
        noContent: '内容がありません',
        statsEmpty: '統計できる作品がありません',
        statsSummaryLabel: '作品統計の概要',
        statsWorks: '作品',
        statsCharacters: '有効文字数',
        statsLines: '本文行',
        statsAverageCharacters: '平均文字数',
        statsLongestWork: '最長作品',
        statsTitleRatioLabel: '詞牌の比率',
        statsOther: 'その他',
        unitCharacter: '字',
        unitPoem: '首',
    },
};

function getInitialLanguage() {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(getInitialLanguage);

    const value = useMemo(() => {
        const setLanguage = (nextLanguage) => {
            const resolvedLanguage = SUPPORTED_LANGUAGES.includes(nextLanguage)
                ? nextLanguage
                : DEFAULT_LANGUAGE;

            setLanguageState(resolvedLanguage);
            window.localStorage.setItem(LANGUAGE_STORAGE_KEY, resolvedLanguage);
        };

        const t = (key) => messages[language]?.[key] ?? messages[DEFAULT_LANGUAGE][key] ?? key;

        return { language, setLanguage, t };
    }, [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}
