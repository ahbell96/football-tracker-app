import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-screen bg-primary-muted text-white">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome to Football Tracker</h1>
            <p className="py-6">
              Track live scores, follow teams, and get player statistics in
              real-time!
            </p>
            <a href="/teams" className="btn btn-primary">
              View Teams
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">Real-Time Scores</h3>
                <p>Stay updated with live scores from your favorite matches.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">Team Tracking</h3>
                <p>
                  Follow your favorite teams and get all the latest updates.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-xl font-semibold">Player Stats</h3>
                <p>
                  Access detailed statistics for players across all leagues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the Football Community
          </h2>
          <p className="mb-6">
            Sign up now to get personalized updates and notifications!
          </p>
          <a href="/signup" className="btn btn-secondary">
            Sign Up
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
