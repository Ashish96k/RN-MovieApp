import { createContext, useContext, useState } from "react";

const RootContext = createContext({});

export const useRootContext = () => useContext(RootContext);

const RootContextProvider = ({ children }) => {
  // GLobal State Variables
  const [selectedMovie, setSelectedMovie] = useState({});
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [likedList, setLikedList] = useState([]);

  return (
    <RootContext.Provider
      value={{
        // GLobal State Variables
        selectedMovie,
        nowPlayingList,
        popularList,
        upcomingList,
        topRatedList,
        likedList,
        setSelectedMovie,
        setNowPlayingList,
        setPopularList,
        setUpcomingList,
        setTopRatedList,
        setLikedList,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
