import React from 'react';
import { POPULAR_GAMES } from '../data/mockData';
import { GameMonogram } from './Icons';

export default function GameFilterBar({ selectedGame, setSelectedGame }) {
  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="games-scroll-bar">
        {POPULAR_GAMES.map((game) => {
          const isActive = selectedGame === game.id;
          return (
            <button
              key={game.id}
              className={`game-chip ${isActive ? 'active' : ''}`}
              onClick={() => setSelectedGame(game.id)}
            >
              {game.code ? (
                <GameMonogram code={game.code} publisher={game.publisher} />
              ) : (
                <span style={{ fontSize: '12px', fontWeight: 700 }}>•</span>
              )}
              <span>{game.name}</span>
              <span style={{ fontSize: '11px', opacity: 0.65 }}>({game.count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
