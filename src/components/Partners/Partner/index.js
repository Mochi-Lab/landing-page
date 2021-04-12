export default function Partner({ data }) {
  const { image, name, url } = data;
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <div className='partner-card cursor-pointer content flex justify-center rounded-xl'>
        <img src={image} alt={name} />
        {/* <p className='name'>{name}</p> */}
      </div>
    </a>
  );
}
