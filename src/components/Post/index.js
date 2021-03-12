import React, {useState} from 'react';
import './Post.css';
import Related from '../Related'
let post_data = require('../../assets/step-by-step-guide.json');

function Post() {
  const [reactions, setReaction] = useState(post_data.reactions.total);

    return(
        <>
        <div className="post">
        <div className = "postTitle">{post_data.title}</div>
        <div className = "postHeader">
            <div>{post_data.createdAt}</div>
            <div className = "reactions">
              <div>{reactions}</div>
              <img src="https://hackernoon.com/emojis/heart.png" onClick={() => setReaction(reactions +1)}/>
              <img src="https://hackernoon.com/emojis/light.png" onClick={() => setReaction(reactions + 1)}/>
              <img src="https://hackernoon.com/emojis/boat.png" onClick={() => setReaction(reactions + 1)}/>
              <img src="https://hackernoon.com/emojis/money.png" onClick={() => setReaction(reactions + 1)} />
            </div>
            
        </div>
        <div>
            <img className="img-fluid" src={post_data.mainImage} />
        </div>
            <div className="postProfile">
                <img className="postAvatar img-fluid" src={post_data.profile.avatar} />
                <div className="postProfileNames">
                  <div className="postLink">@{post_data.profile.handle}</div>
                  <div>{post_data.profile.displayName}</div>
                  <div>{post_data.profile.bio}</div>
                </div>
            </div>
            <div className="postMarkUp" dangerouslySetInnerHTML={{ __html: post_data.markup}}/>
                <div className="reactions-center">
                    <div>{reactions}</div>
                    <img src="https://hackernoon.com/emojis/heart.png" onClick={() => setReaction(reactions + 1)}/>
                    <img src="https://hackernoon.com/emojis/light.png" onClick={() => setReaction(reactions + 1)}/>
                    <img src="https://hackernoon.com/emojis/boat.png" onClick={() => setReaction(reactions + 1)} />
                    <img src="https://hackernoon.com/emojis/money.png" onClick={() => setReaction(reactions + 1)} />
                </div>
                <div className="postShareBlurb">
                    <div className="postShareStory">Share this story
                      <img src="https://hackernoon.com/social-icons/twitter-new.png"/>
                      <img src="https://hackernoon.com/social-icons/facebook-new.png"/>
                      <img src="https://hackernoon.com/social-icons/linkedin-new.png"/>
                      <img src="https://hackernoon.com/social-icons/email-new.png"/>
                    </div>
                    
                    <div className="postShareInside row">
                      <div className="col postShareProfile">
                        <img className="postAvatar img-fluid" src={post_data.profile.avatar}/>
                        <div className="postLink">@{post_data.profile.handle}</div>
                        <div>{post_data.profile.displayName}</div>
                      </div>
                      <div className="col postAdLink">
                        <a href={post_data.profile.adLink}>
                        <i className={post_data.profile.adIcon}></i>
                        {post_data.profile.adText}
                        </a>
                      </div>
                    </div>
                </div>
                <div className="postRelated"><span>RELATED</span></div>
                <div className="row postRelatedContainer">
                <Related
                 link={post_data.relatedStories[0].link}
                 title={post_data.relatedStories[0].text}
                 image={post_data.relatedStories[0].image}
                 site={post_data.relatedStories[0].website}
                 handle={post_data.relatedStories[0].companyName}
                />
                <Related
                  link={post_data.relatedStories[1].link}
                  title={post_data.relatedStories[1].title}
                  image={post_data.relatedStories[1].mainImage}
                  avatar={post_data.relatedStories[1].profile.avatar}
                  site={post_data.relatedStories[1].website}
                  handle={post_data.relatedStories[1].profile.handle}
                  name={post_data.relatedStories[1].profile.displayName}
                  estimatedTime={post_data.relatedStories[1].estimatedTime}
                  time={post_data.relatedStories[1].publishedAt}
                />
                <Related
                  link={post_data.relatedStories[2].link}
                  title={post_data.relatedStories[2].title}
                  image={post_data.relatedStories[2].mainImage}
                  avatar={post_data.relatedStories[2].profile.avatar}
                  site={post_data.relatedStories[2].website}
                  handle={post_data.relatedStories[2].profile.handle}
                  name={post_data.relatedStories[2].profile.displayName}
                  estimatedTime={post_data.relatedStories[2].estimatedTime}
                  time={post_data.relatedStories[2].publishedAt}
                />
                </div>
              <div className="d-flex flex-column align-items-center">
                <div className="postTagTitle"><span>TAGS</span></div>
                  <div className="postTagContainer">
                    {post_data.tags.map((tag) => (
                    <div className="postTag">#{tag}</div>))}
                  </div>
                </div>
        </div>
        </>
    )
}
export default Post;