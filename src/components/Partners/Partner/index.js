export default function Partner({ data }) {
  const { image, name, role } = data;
  return (
    <div className='partner-card'>
      <img src={image} alt={name + role} />
      {/* <p className='name'>{name}</p> */}
    </div>
  );
}
