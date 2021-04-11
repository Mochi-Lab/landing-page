import RoadmapCard from './RoadmapCard';
import './style.css';

export default function Roadmap() {
  const contents = [
    {
      stage: 'STAGE 01',
      header: 'Project Commencement',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: 'Q1, 2021',
    },
    {
      stage: 'STAGE 02 (Current Stage)',
      header: 'Launching Mochi Marketplace & Mochi Earn',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: 'Q2, 2021',
    },
    {
      stage: 'STAGE 03',
      header: 'Launching Mochi Dex',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: 'Q3, 2021',
    },
    {
      stage: 'STAGE 04',
      header: 'Launching NFT Launpad & Mochi Integration',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: 'Q4, 2021',
    },
    {
      stage: 'STAGE 04',
      header: 'Growing Mochi Ecosystem',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: '2022',
    },
    {
      stage: 'STAGE 04',
      header: 'Community Driven Ecosystem',
      content:
        'Cras fames semper semper nibh vestibulum. Interdum augue massa feugiat gravida a pellentesque ut fermentum vitae. Dictum cursus amet.',
      date: '2023',
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
