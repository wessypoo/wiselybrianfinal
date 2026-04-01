function SectionBanner({ title, description }) {
  return (
    <div className="bg-green-700 text-white rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <p className="text-green-100 text-sm">{description}</p>
    </div>
  );
}

export default SectionBanner;
