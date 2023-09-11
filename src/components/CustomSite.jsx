import React, { useState, useEffect, useMemo } from "react";

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

function CustomSite() {
  const [url, setUrl] = useState("");
  const [history, setHistory] = useState(
    loadFromLocalStorage("customSiteHistory", [])
  );
  const [favorites, setFavorites] = useState(
    loadFromLocalStorage("customSiteFavorites", [])
  );

  const toggleFavorite = (page) => {
    const updatedFavorites = favorites.includes(page)
      ? favorites.filter((favorite) => favorite !== page)
      : [page, ...favorites];
    setFavorites(updatedFavorites);
    saveToLocalStorage("customSiteFavorites", updatedFavorites);
  };

  const openCustomWindow = (customUrl) => {
    const completeUrl =
      customUrl.startsWith("http://") || customUrl.startsWith("https://")
        ? customUrl
        : `http://${customUrl}`;
    window.open(completeUrl, "_blank");
    // No agregamos automáticamente al historial aquí
  };

  const addToHistory = (newUrl) => {
    const updatedHistory = [newUrl, ...history].slice(0, 5);
    setHistory(updatedHistory);
    saveToLocalStorage("customSiteHistory", updatedHistory);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      openCustomWindow(url);
      addToHistory(url);
    }
  };

  const openHistoryWindow = (historyUrl) => {
    openCustomWindow(historyUrl);
  };

  const clearHistory = () => {
    setHistory([]);
    saveToLocalStorage("customSiteHistory", []);
  };

  return (
    <div className="items-start">
      Buscar/Agregar URLs
      <div className="mt-2 mr-2 site-icon flex gap-2 items-center">
        <p className="font-bold text-2xl">+</p>
        <input
          className="block w-1/2 p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Enter custom URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="flex justify-around m-2">
        <div className="favorites m-2">
          <h2 className="text-xl font-bold">Favoritos</h2>
          <ul className="mt-2">
            {favorites.map((page, index) => (
              <li className="mb-4" key={index}>
                <a
                  href="#"
                  onClick={() => openCustomWindow(page)}
                  className="py-1 px-3 border rounded-lg hover:bg-gray-950 font-bold"
                >
                  {page}
                </a>
                <button className="m-1 mr-2 text-xl brightness-75 hover:brightness-125" onClick={() => toggleFavorite(page)}>💔</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="history m-2">
          <h2 className=" text-xl font-bold">Historial</h2>
          <ul className="mt-2">
            {history.map((page, index) => (
              <li className="mb-4" key={index}>
                <button  className="m-1 mr-2 text-xl brightness-75 hover:brightness-125" onClick={() => toggleFavorite(page)}>
                  ❤
                </button>
                <a
                  href="#"
                  onClick={() => openHistoryWindow(page)}
                  className="py-1 px-3 border rounded-lg hover:bg-gray-950 font-bold"
                >
                  {page}
                </a>
                
              </li>
            ))}
          </ul>
          <hr className="m-2 opacity-5" />
          <button className="flex items-center" onClick={clearHistory}> <img className="h-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" alt="" /> Limpiar Historial</button>
        </div>
      </div>
    </div>
  );
}

export default CustomSite;
