import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

// YouTube API configuration
const YOUTUBE_API_KEY = 'AIzaSyAAWFBwY7GXy3H7iywFuZsPtvM9xlYTgzo'; // Replace with your actual API key
const CHANNEL_ID = 'UC0o1efqc81R-kFbj67fcArw'; // Your correct YouTube channel ID
const MAX_RESULTS = 6; // Number of recent videos to display

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [channelStats, setChannelStats] = useState({
    subscriberCount: '-',
    videoCount: '-',
    viewCount: '-'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format large numbers (1000 -> 1K, 1000000 -> 1M)
  const formatCount = (count) => {
    const num = parseInt(count);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  useEffect(() => {
    const fetchChannelStats = async () => {
      try {
        // Fetch channel statistics
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&id=${CHANNEL_ID}&part=statistics`
        );
        
        if (channelResponse.ok) {
          const channelData = await channelResponse.json();
          if (channelData.items && channelData.items.length > 0) {
            const stats = channelData.items[0].statistics;
            setChannelStats({
              subscriberCount: formatCount(stats.subscriberCount),
              videoCount: formatCount(stats.videoCount),
              viewCount: formatCount(stats.viewCount)
            });
          }
        }
      } catch (err) {
        console.error('Error fetching channel stats:', err);
        // Keep default values if API fails
      }
    };

    const fetchYouTubeVideos = async () => {
      try {
        setLoading(true);
        
        // Fetch channel statistics first
        await fetchChannelStats();
        
        // Fetch recent videos from YouTube API
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error('YouTube API Response Error:', {
            status: response.status,
            statusText: response.statusText,
            errorBody: errorText
          });
          throw new Error(`YouTube API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        console.log('YouTube API Response:', data);
        
        // Get additional video details (duration, view count, etc.)
        const videoIds = data.items.map(item => item.id.videoId).join(',');
        const detailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=statistics,contentDetails`
        );

        if (!detailsResponse.ok) {
          throw new Error('Failed to fetch video details');
        }

        const detailsData = await detailsResponse.json();
        
        // Combine video data with details
        const videosWithDetails = data.items.map((video, index) => {
          console.log('Raw video snippet:', video.snippet);
          console.log('Available thumbnails:', video.snippet.thumbnails);
          
          const videoData = {
            id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.default?.url,
            publishedAt: video.snippet.publishedAt,
            viewCount: detailsData.items[index]?.statistics?.viewCount || '0',
            duration: detailsData.items[index]?.contentDetails?.duration || 'PT0S'
          };
          
          console.log('Final video data with thumbnail:', videoData.thumbnail);
          return videoData;
        });

        setVideos(videosWithDetails);
      } catch (err) {
        console.error('Detailed YouTube API Error:', {
          message: err.message,
          stack: err.stack,
          apiKey: YOUTUBE_API_KEY ? 'Present' : 'Missing',
          channelId: CHANNEL_ID,
          fullError: err
        });
        setError(`API Error: ${err.message}`);
        // Fallback to demo videos if API fails
        setVideos(getDemoVideos());
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, []);

  // Empty fallback - no demo videos
  const getDemoVideos = () => [];

  // Format duration from YouTube API format (PT15M30S) to readable format (15:30)
  const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');
    
    if (hours) {
      return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }
    return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
  };

  // Format view count (5200 -> 5.2K)
  const formatViewCount = (count) => {
    const num = parseInt(count);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M views`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K views`;
    }
    return `${num} views`;
  };

  // Format publish date
  const formatPublishDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
  };
  return (
    <>
      <Navbar />
      
      <div className="page-container">
        <div className="about-container">
          {/* YouTube Header */}
          <div className="youtube-header">
            <a 
              href="https://www.youtube.com/@exiledftw5308" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-title-link"
            >
              <h1 className="youtube-main-title">
                <svg viewBox="0 0 24 24" fill="#FF0000" className="youtube-header-logo">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube Channel
              </h1>
            </a>
            <p className="youtube-subtitle">
              Hobby based channel for gaming and code highlights, tutorials, and tech reviews.
            </p>
          </div>

        {/* Channel Stats */}
        <div className="channel-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3>Subscribers</h3>
            <p className="stat-number">{channelStats.subscriberCount}</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3>Videos</h3>
            <p className="stat-number">{channelStats.videoCount}</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Views</h3>
            <p className="stat-number">{channelStats.viewCount}</p>
          </div>
        </div>

        {/* Recent Videos */}
        <div className="videos-section">
          <h2 className="section-title">Recent Videos</h2>
          
          {loading && (
            <div className="loading-state">
              <p>Loading recent videos...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <p>Unable to fetch latest videos.</p>
            </div>
          )}

          <div className="videos-grid">
            {videos.map((video) => (
              <div key={video.id} className="video-card feature-card">
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <div className="video-thumbnail">
                    <div className="play-button-container">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="play-button">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="video-duration-overlay">
                      {formatDuration(video.duration)}
                    </div>
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">
                      {video.description.length > 80 
                        ? `${video.description.substring(0, 80)}...` 
                        : video.description}
                    </p>
                    <div className="video-meta">
                      <span className="video-views">{formatViewCount(video.viewCount)}</span>
                      <span className="video-date">{formatPublishDate(video.publishedAt)}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Description */}
        <div className="channel-description">
          <h2 className="section-title">About My Channel</h2>
          <div className="description-content">
            <p>
              Welcome to my YouTube channel! Here, I share all sorts of videos that may be about video games, 
              coding, tech etc.
            </p>
            <p>
              It's a personal hobby of mine, sometimes when I play games or code usually I highlight them by recording
              them and uploading them here, I also share tutorials and tips on programming, automation, and other tech-related topics.
            </p>
          </div>
        </div>

          {/* Subscribe CTA */}
          <div className="subscribe-cta">
            <h2>Stay Updated with Latest Content</h2>
            <p>Take a look and I hope you like what you see!!</p>
            <a 
              href="https://youtube.com/@exiledftw5308" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="subscribe-button"
            >
              Subscribe to My Channel
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="page-footer">
          <p className="copyright">&copy; {new Date().getFullYear()} Project Thunder. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Youtube;
