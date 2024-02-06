import React, { createContext, useState } from 'react';

const NewsContext = createContext();
const { Provider, Consumer: NewsConsumer } = NewsContext;

const NewsProvider = ({ children }) => {
    const [isNewsActive, setIsNewsActive] = useState(false);
    const [announcement, setAnnouncement] = useState(null);

    const showNews = (message) => {
        setIsNewsActive(true);
        setAnnouncement(message);
    };

    const hideNews = (clearAnnouncement = false) => {
        setIsNewsActive(false);
        if (clearAnnouncement) setAnnouncement(null);
    };

    return <Provider value={{ isNewsActive, announcement, showNews, hideNews }}>{children}</Provider>;
};

export { NewsProvider, NewsConsumer, NewsContext };
