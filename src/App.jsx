import React from 'react';
import SocialMedia from './Components/SocialMedia.jsx';
import UserData from './Components/UserData.json';
import './App.css';
import FriendListItem from './Components/FriendListItem.jsx';
import friends from './Components/friends.json';
import TransactionHistory from './Components/TransactionHistory.jsx';
import transactions from './Components/TransactionHistory.json';

function App() {
  return (
    <div>
      {/* Kullanıcı bilgilerini SocialMedia bileşenine gönderiyoruz */}
      <SocialMedia user={UserData} />

      {/* Arkadaş listesi */}
      <ul style={{ listStyleType: "none" }}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>

        ))}
      </ul>
      <TransactionHistory items={transactions} />

    </div>

  );
}

export default App;
