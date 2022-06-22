import { useEffect, useState } from "react"

import { getStorages } from "api/storage"

import { Card } from "components/Card"
import { CardContent } from "components/Card/CardContent"
import { CardHead } from "components/Card/CardHead"
import { Storage } from "components/Storage"
import { titleCompare } from "utils/compare"

const List = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getStorages()
      .then(res => res.data)
      .then(storages => storages.sort(titleCompare))
      .then(setData)
      .catch(setError)
  }, [])

  return (
    <Card>
      <CardHead title="Storage" />
      <CardContent>
        <style jsx>{`
          @import 'color';
          ul li span {
            color: color(grey, disabled-text);
          }  
        `}</style>
        <ul>
          {data.map(storage => <li><Storage {...storage} /></li>)}
        </ul>
      </CardContent>
    </Card>
  )
}

export default List