import { IServer } from 'upcloud'
import { styles } from './styles'


export const Server = (props: IServer) => {
  return (
    <div className="Server__Container">
      <style jsx>
        {styles}
      </style>
      <div className="Server__State" data-state={props.state}></div>
      <div className="Server__Info">
        <div className="Server__Title">{props.title}</div>
        <sub className="Server__Hostname">Hostname: {props.hostname}</sub>
      </div>
    </div>
  )
}
