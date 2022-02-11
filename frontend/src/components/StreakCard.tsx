interface StreakCardProps {
  cardTitle: string,
  cardText: string,
  cardIcon: any,
  optClassName?: string
}

const StreakCard = ({ cardTitle, cardText, cardIcon, optClassName='streak-card' }: StreakCardProps) => {
  return (
    <div className={optClassName}>
      <header id='streak-card-title'>{cardTitle}</header>
      <div className='streak-card-bottom'>
        <div className='streak-card-text'>
          {cardText}
        </div>
        <div className='streak-card-icon'>
          {cardIcon}
        </div>
      </div>
    </div>
  )
}

export default StreakCard
