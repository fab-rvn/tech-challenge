import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import { postSelector } from "../../redux/post/postSelector";
import * as ROUTES from "../../routes";
import {
  Nav,
  NavContainer,
  NavLogo,
  PostWrapper,
  ResultContainer,
  ResultH2,
  SearchInput,
  SearchWrap,
} from "./styles";

const Search = () => {
  const { posts } = useSelector(postSelector);
  const [searchQuery, setSearchQuery] = useState("");
  const [findResult, setFindResult] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  });

  useEffect(() => {
    const foundPost = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFindResult(foundPost);
  }, [posts, searchQuery]);

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to={ROUTES.HOME}>Jokes App</NavLogo>
          <SearchWrap>
            <SearchInput
              type="search"
              placeholder="Search"
              ref={inputRef}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </SearchWrap>
        </NavContainer>
      </Nav>
      {!searchQuery ? (
        <ResultContainer>
          <ResultH2>Search for something...</ResultH2>
        </ResultContainer>
      ) : (
        <ResultContainer>
          <ResultH2>
            {findResult.length} result for {searchQuery}
          </ResultH2>
          <PostWrapper>
            {findResult.length > 0 &&
              findResult.map(result => (
                <PostCard key={result._id} post={result} />
              ))}
          </PostWrapper>
        </ResultContainer>
      )}
    </>
  );
};

export default Search;
