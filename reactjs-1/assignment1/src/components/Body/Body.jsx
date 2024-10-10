import React from "react";
import './Body.css'
const topstories=[
    {
        title:"Amazing Adventure",
        video:"https://www.youtube.com/embed/4YwDGz3fEpE?si=Df_dYDPfKAsEcGiL",
        content:"A thrilling adventure that will take you to the farthest reaches of your imagination. Enjoy the visual spectacle of this captivating video."
    },
    {
        title:"The Mysterious Forest",
        video:"https://www.youtube.com/embed/L1F3sHklg9k?si=Maf8P2XA2wG_SNvJ",
        content:"Discover the mysteries hidden deep within the forest in this gripping tale. This video will immerse you in a world of wonder and excitement."
    },
    {
        title:"Epic Space Journey",
        video:"https://www.youtube.com/embed/H14TSlXuzcQ?si=u9OIqHToDGSk5Nz8",
        content:"Join us on an epic journey through the cosmos. This video showcases breathtaking visuals of space exploration."
    },
    {
        title:"Underwater Wonders",
        video:"https://www.youtube.com/embed/843Rpqza_6o?si=p6Y1SWl8JeM7a4s5",
        content:"Explore the depths of the ocean and discover the wonders beneath the waves. A visual treat for marine enthusiasts."
    }
];
const lastestStories=[
    {
        title:"Breaking News: Global Shift",
        video:"https://www.youtube.com/embed/6fKfaJheWbk?si=bx0Q1GGAuSiaQbC5",
        content:"Stay updated with the latest breaking news around the globe. This video covers major shifts in politics and economy."
    },
    {
        title:"Technology Trends 2024",
        video:"https://www.youtube.com/embed/wXc2tao51D4?si=_KKkmDraRPrIpmsL",
        content:"A deep dive into the technological advancements shaping the future. Explore new innovations in this insightful video."
    },
    {
        title:"The Rise of AI",
        video:"https://www.youtube.com/embed/Dk7h22mRYHQ?si=KdYNMeDvJ2tpOvCN",
        content:"Artificial intelligence is transforming industries. Learn how AI is impacting various sectors globally in this informative video."
    },
    {
        title:"Climate Change Impact",
        video:"https://www.youtube.com/embed/G4H1N_yXBiA?si=mno-b3sZeDUHJHz_",
        content:"An eye-opening documentary on how climate change is affecting ecosystems and communities across the world."
    }
];
const popularStories=[
    {
       title:"Trending Now: Celebrity Scandals",
       video:"https://www.youtube.com/embed/sQ1bpryAJGE?si=SMvdGVGxY791LzQm",
       content:"Get the inside scoop on the latest celebrity scandals. This video reveals the top trending topics in entertainment."
    }, 
    {
       title:"The Greatest Sports Moments",
       video:"https://www.youtube.com/embed/aTTOQtSOX3I?si=kDo-BEdCqfdQayWi", 
       content:"Relive the greatest sports moments in history. A collection of jaw-dropping performances and iconic victories."
    },
    {
       title:"Top 10 Movie Trailers",
       video:"https://www.youtube.com/embed/ahZX-ewuZP8?si=yEjv1mbEz-NGRLOQ", 
       content:"A compilation of the most anticipated movie trailers of the year. Don’t miss out on these blockbuster hits."
    },
    {
       title:"Music's Biggest Hits",
       video:"https://www.youtube.com/embed/VVBziwNCHq8?si=apx7K8lQeRG585k7", 
       content:"Check out the biggest music hits of the year. A must-watch for fans of trending artists and chart-topping tracks."
    }
];
const editorsPicks=[
    {
       title:"Editor's Pick: Best Short Films",
       video:"https://www.youtube.com/embed/y5y17tmaZlY?si=HvW1tuj1IHU_mOF2",
       content:"A curated list of the best short films handpicked by our editors. These films offer unique storytelling experiences."
    },
    {
       title:"Must-See Documentaries",
       video:"https://www.youtube.com/embed/1tGEAeUqcMo?si=-3uk2g4dvWQMNbSw", 
       content:"Dive into the world of documentaries with this curated list of must-watch films that will broaden your horizons."
    },
    {
       title:"Top Travel Destinations",
       video:"https://www.youtube.com/embed/exI_hD_4jAM?si=F43jn83PH4icl02b",
       content:"Explore the top travel destinations around the globe, from hidden gems to popular tourist attractions."
    },
    {
       title:"Underrated Movies",
       video:"https://www.youtube.com/embed/qEuftBapJes?si=78Z0SUL4TRbP0gUC",
       content:"Discover hidden gems in cinema with this list of underrated movies. Perfect for movie enthusiasts looking for something new."
    }
];
const Body=()=>{
    return (
        <div className="body-content">
        <section id="top-stories">
            <h2>Top Stories</h2>
            <div className="stories-container">
                {topstories.map((story,index)=>(
                    <div className="story-card" key={index}>
                        <div className="story-video">
                            <iframe src={story.video} title={story.title} frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen>
                            </iframe>
                    </div>
                    <div className="story-details">
                        <h3>{story.title}</h3>
                        <p>{story.content}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
        <section id="latest-stories">
            <h2>Latest Stories</h2>
            <div className="stories-container">
                {lastestStories.map((story,index)=>(
                    <div className="story-card" key={index}>
                        <div className="story-video">
                            <iframe src={story.video} title={story.title} frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen>
                            </iframe>
                    </div>
                    <div className="story-details">
                        <h3>{story.title}</h3>
                        <p>{story.content}</p>
                    </div>
                    </div>
                ))}
            </div>
        </section>
        <section id="popular-stories">
        <h2>Popular Stories</h2>
        <div className="stories-container">
          {popularStories.map((story, index) => (
            <div className="story-card" key={index}>
              <div className="story-video">
                <iframe src={story.video} title={story.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="story-details">
                <h3>{story.title}</h3>
                <p>{story.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="editors-picks">
        <h2>Editor's Picks</h2>
        <div className="stories-container">
          {editorsPicks.map((story, index) => (
            <div className="story-card" key={index}>
              <div className="story-video">
                <iframe src={story.video} title={story.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="story-details">
                <h3>{story.title}</h3>
                <p>{story.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    );
};
export default Body;