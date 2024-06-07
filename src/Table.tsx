import { useState } from "react"
import CustomButton from "./CustomButton"

interface IFetchData {
    id: number
    entity: string
    expiryDate: string
    activeDate: string
    jurisdiction: string
    name: string
    regulator: string
    status: string
  }

export default function Table(): JSX.Element {

    const [data, setData] = useState<IFetchData[] | undefined>(undefined)

    async function fetchData(): Promise<void> {
        const response = await fetch('http://localhost:8080/EEAPassport?numOfObjects=10')
        const newdata = await response.json() as IFetchData[]
        setData(newdata)
      }
    

    return (
        <>
        <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>status</th>
        </tr>
        {data?.map((value) => (
          <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.status}</td>
          </tr>
        ))}
      </table>
        <CustomButton handleOnClick={fetchData} lable="fetch data" varient="blue"/>
        </>
    )
}