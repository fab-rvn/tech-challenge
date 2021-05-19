import moment from "moment";
import { object } from "prop-types";
import React from "react";
import { Card, PostH2, PostImg, PostInfo, PostP, PostSpan } from "./styles";

const PostCard = ({ post }) => {
  return (
    <Card>
      {post.category !== "Joke" && (
        <PostImg src={post.media} alt={post.title} />
      )}
      <PostInfo>
        <PostH2>{post.title}</PostH2>
        {post.category === "Joke" && <PostP joke>{post.description}</PostP>}
        <PostSpan>{moment(post.createdAt).fromNow()}</PostSpan>
      </PostInfo>
    </Card>
  );
};

PostCard.propTypes = {
  post: object.isRequired,
};

export default PostCard;
