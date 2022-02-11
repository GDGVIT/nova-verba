interface ViewBookPageButtonProps {
  onClickFunction: (arg0: number) => void
}
const ViewBookPageButton = ({ onClickFunction }: ViewBookPageButtonProps) => {
  return (
    <button id='view-book-page-button' onClick={() => onClickFunction(1)} >
      View &gt;
    </button>
  )
}

export default ViewBookPageButton
