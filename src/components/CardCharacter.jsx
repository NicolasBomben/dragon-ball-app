import PropTypes from 'prop-types';

export const CardCharacter = ({ name, ki, maxKi, race, gender, description, image, affiliation }) => {
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <img className="h-52 w-full object-contain" src={image} alt={`${name} Image`} />
    <div className="p-4">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{race}</div>
      <h2 className="mt-1 text-lg font-medium text-black">{name}</h2>
      <p className="mt-2 text-slate-500">Gender: {gender}</p>
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-600"><span className="font-bold">Ki:</span> {ki}</p>
        <p className="text-sm text-gray-600"><span className="font-bold">MaxKi:</span> {maxKi}</p>
        <p className="text-sm text-gray-600"><span className="font-bold">Affiliation:</span> {affiliation}</p>
        <p className="text-sm text-gray-600"><span className="font-bold">Description:</span> {description}</p>
      </div>
    </div>
  </div>
  );
};

CardCharacter.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    ki: PropTypes.string.isRequired,
    maxKi: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
