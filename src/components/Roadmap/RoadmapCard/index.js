export default function RoadmapCard({ data, index }) {
  const { stage, header, content, date } = data;

  return (
    <>
      {window.innerWidth < 768 ? (
        <div className='roadmap-card'>
          <div className='roadmap-row'>
            <div className='roadmap-card-bg roadmap-card-right'>
              <p className='roadmap-card-stage'>{stage + ' ' + date}</p>
              <p className='roadmap-card-header'>{header}</p>
              <p className='roadmap-card-content'>{content}</p>
            </div>
          </div>
          <div className='dot-area center'>
            {index === 1 ? (
              <div className='dot-nowon center'>
                <div className='dot' />
              </div>
            ) : (
              <div className='dot' />
            )}
          </div>
        </div>
      ) : (
        <div className='roadmap-card'>
          {index % 2 !== 0 ? (
            <div className='roadmap-row'>
              <div className='roadmap-card-bg roadmap-card-right'>
                <p className='roadmap-card-stage'>{stage}</p>
                <p className='roadmap-card-header'>{header}</p>
                <p className='roadmap-card-content'>{content}</p>
              </div>
              <div className='roadmap-card-date roadmap-card-left'>
                <div className='date-left'>
                  <p className='roadmap-date'>{date}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className='roadmap-row'>
              <div className='roadmap-card-bg'>
                <p className='roadmap-card-stage'>{stage}</p>
                <p className='roadmap-card-header'>{header}</p>
                <p className='roadmap-card-content'>{content}</p>
              </div>
              <div className='roadmap-card-date roadmap-date-right'>
                <div className='date-right'>
                  <p className='roadmap-date'>{date}</p>
                </div>
              </div>
            </div>
          )}

          <div className='dot-area center'>
            {index === 1 ? (
              <div className='dot-nowon center'>
                <div className='dot' />
              </div>
            ) : (
              <div className='dot' />
            )}
          </div>
        </div>
      )}
    </>
  );
}
