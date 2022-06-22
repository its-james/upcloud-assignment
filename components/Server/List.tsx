import { getServers } from "api/server"
import { Suspense, useEffect, useMemo, useState } from "react"
import { Card } from "components/Card"
import { CardContent } from "components/Card/CardContent"
import { CardHead } from "components/Card/CardHead"
import { CardSection } from "components/Card/CardSection"
import { Server } from "components/Server"
import { Loader } from "components/Loader"
import { Input } from "components/Input"
import { IServer } from "upcloud"
import { hostnameCompare } from "utils/compare"


const List = () => {
  const [data, setData] = useState<IServer[]>([])
  const [filteredData, setFilteredData] = useState<IServer[]>([])
  const [error, setError] = useState<string>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getServers()
      .then(res => res.data)
      .then(servers => servers.sort(hostnameCompare))
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoaded(true))
  }, [])

  useMemo(() => {
    setFilteredData(data.filter(server =>
      server.hostname.includes(search) ||
      server.title.includes(search)
    ))
  }, [search, data])

  return (
    <>
      <Input type="search" placeholder="Search by name and hostname" value={search} onChange={e => setSearch(e.target.value)} />
      <Card>
        <CardHead title="Servers" />
        <CardContent>
          {!isLoaded && <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>}
          {isLoaded && filteredData.length === 0
            ? <p>No results matching your search</p>
            : filteredData.map(server => (
              <CardSection>
                <Server {...server} />
              </CardSection>
            ))
          }
          {error && <p>{error}</p>}
        </CardContent>
      </Card>
    </>
  )
}

export default List