import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Manisha Baliarsingh',
    email: 'manishabaliarsingh@gmail.com',
    phone: '9876543210',
    address: 'Pin-752050, Kudiary, Jatni, Bhubaneswar',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  // Handle input changes
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Save changes
  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <h2 className="profile-title">User Profile</h2>

      <div className="profile-card">
        {isEditing ? (
          <div className="edit-fields">
            <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
            <input type="text" name="phone" value={editedUser.phone} onChange={handleChange} />
            <input type="text" name="address" value={editedUser.address} onChange={handleChange} />
            <button className="save-btn" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </>
        )}
        
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
