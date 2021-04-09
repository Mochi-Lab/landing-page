import RoadmapCard from './RoadmapCard';
import './style.css';

export default function Roadmap() {
  const contents = [
    {
      stage: 'STAGE 01',
      header: 'Development Started',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: 'April 10, 2020',
    },
    {
      stage: 'STAGE 02 (Current Stage)',
      header: 'Pre-ICO Opens',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: 'October 27, 2020',
    },
    {
      stage: 'STAGE 03',
      header: 'Private Token Round',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: 'December 12, 2020',
    },
    {
      stage: 'STAGE 04',
      header: 'App Integration Progress',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: 'June 27, 2021',
    },
  ];

  return (
    <div className='container roadmap-page'>
      <div>
        <p className='smail-title'>ROADMAP</p>
        <p className='big-title'>The Mochi Roadmap</p>
        <div className='center'>
          <p className='description'>
            Auctor mi rutrum pellentesque suspendisse sed adipiscing netus etiam. Ornare amet sed ac
            scelerisque vel, egestas. Ultrices nam est, odio mattis.
          </p>
        </div>
      </div>

      <div className='roadmap'>
        <div className='column-background center'>
          <div className='roadmap-column' />
        </div>

        <div>
          {contents.map((content, index) => (
            <RoadmapCard key={index} data={content} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
