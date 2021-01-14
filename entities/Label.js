import Transform from '../components/Transform'

const Label = ({ text, lineHeight, height, align = 'left', fontSize = '1em', className }) => {
  return <div className={className} style={{ textAlign: align, fontSize, lineHeight: `${(lineHeight || height)}px` }}>{ text }</div>
}

export default Transform(Label);
