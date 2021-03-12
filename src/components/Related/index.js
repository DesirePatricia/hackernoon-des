let post_data = require('../../assets/step-by-step-guide.json');

function Related({link, title, image, avatar, site, handle, name, estimatedTime, date}) {
    return(
        <div className="col-md postRelatedBox">
            <a className="postLink" href={link}>{title}</a>
            <div className="postRelatedImageContainer">
                <img className="postRelatedImage img-fluid" src={image} />
            </div>
            <div className="row postRelatedProfile">
                <div className="col-8">
                {avatar !== undefined &&
                <img className="postAvatar" src={avatar}/>
                }
                <div className="postProfileTitle">
                <a className="postLink" href={site}>@{handle}</a>
                <div>{name}</div>
                </div>
                </div>
                <div className="col text-right">
                    {estimatedTime !== undefined && 
                    <div>{estimatedTime}min</div>
                    }
                    <div>{date}</div>
                </div>
            </div>
        </div>
    )
}
export default Related;