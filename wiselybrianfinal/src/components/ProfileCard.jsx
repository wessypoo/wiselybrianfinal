function ProfileCard({ name, role, description, image }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 w-52 text-center shadow-sm">
      <div className="w-24 h-24 rounded-md mx-auto mb-3 overflow-hidden flex items-center justify-center bg-green-100">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl">👤</span>
        )}
      </div>
      <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
      <p className="text-sm text-green-600 mb-2">{role}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

export default ProfileCard;
