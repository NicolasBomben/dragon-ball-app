import PropTypes from 'prop-types';

export const CardCharacter = ({ name, ki, maxKi, race, gender, description, image, affiliation }) => {
  
  return (
    <div className="bg-[#3b3e44] rounded-xl shadow-md overflow-hidden grid grid-cols-2">
      <div className='grid content-center'>
        <img className="h-48 w-full object-contain" src={image} alt={`${name} Image`} />
      </div>
    <div className="p-4">
      <div className="uppercase tracking-wide text-xl text-[#f51e34] font-semibold">{name}</div>
      <h2 className="mt-1 text-lg font-medium text-[#fbc02d]">{race}</h2>
      <p className="mt-2 text-[#fde200ff]">Gender: {gender}</p>
      <div className="mt-4 space-y-2">
        <p className="text-lg text-white"><span className="font-bold">Ki:</span> {ki}</p>
        <p className="text-lg text-white"><span className="font-bold">MaxKi:</span> {maxKi}</p>
        <p className="text-lg text-white"><span className="font-bold">Affiliation:</span> {affiliation}</p>
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
