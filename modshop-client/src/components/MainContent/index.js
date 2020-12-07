import './index.scss';

const MainContent = (props) => {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}

export default MainContent;