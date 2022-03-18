import React from "react"
import { Chart } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js"
import { useFetch } from "../hooks/useFetch"
import { useState, useEffect } from "react"
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
)

export default function List({ list, ...styles }) {
  const { isLoading, data } = useFetch("http://localhost:8888/seances/latest")
  const [seance, setseance] = useState([])
  useEffect(() => {
    setseance(data)
  }, [data])
  console.log(seance)
  return (
    isLoading || (
      <ul className={styles.grid}>
        {list.map((item) => {
          return (
            <ListItem key={item.id} item={item} styles={styles} api={seance} />
          )
        })}
      </ul>
    )
  )
}
const labels = ["1", "2", "2", "4", "5", "6", "7"]

const ListItem = ({ item, styles, api }) => {
  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Rythme cardiaque",
        data: [72, 68, 64, 62, 60, 54, 52],
        borderColor: "#74E390",
        borderWidth: 2,
        backgroundColor: "#FBFBE7",
        fill: false,
        lineTension: 0.3,
      },
      {
        type: "bar",
        label: "Compressions",
        backgroundColor: "#E7F2FB",
        data: [110, 94, 102, 105, 99, 120, 84],
        borderColor: "#EAEAEA",
        fill: false,
        borderWidth: 1,
        barThickness: 26,
        borderRadius: 6,
      },
    ],
  }
  return (
    // <li
    //   className={styles.card}
    //   style={{
    //     listStyle: "none",
    //     display: "flex",
    //     justifyContent: "space-evenly",
    //     alignItems: "center",
    //     cursor: "help",
    //   }}
    // >
    //   <img
    //     src={item.avatar_url}
    //     alt="User's avatar"
    //     style={profilePic}
    //     loading="lazy"
    //   />
    //   <code className={styles.code}>{item.login}</code>
    // </li>
    <>
      <section>
        <h2
          style={{
            font: "normal normal 500 28px/110% 'Poppins', sans-serif",
          }}
        >
          Résumé de la semaine
        </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.card_info}>Rythme cardiaque</h3>
            <p className={styles.card_value}>{api["bpm"]["average"]}</p>
            <p className={styles.card_unite}>BPM</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_info}>Compressions</h3>
            <p className={styles.card_value}>{api["pressions"]["total"]}</p>
            <p className={styles.card_unite}>/min</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.card_info}>Durée</h3>
            <p className={styles.card_value}>{api["duration"]}</p>
            <p className={styles.card_unite}>min</p>
          </div>
        </div>
      </section>
      <section>
        <h2
          style={{
            font: "normal normal 500 28px/110% 'Poppins', sans-serif",
          }}
        >
          Évolution
        </h2>
        <div
          className={styles.evolution}
          style={{
            minHeight: "fit-content",
            borderRadius: "20px",
            backgroundColor: "#FBFBE7",
            border: "solid 1px #EAEAEA",
          }}
        >
          <Chart
            type="bar"
            data={data}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </section>
    </>
  )
}

// const profilePic = {
//   borderRadius: "999px",
//   display: "block",
//   obejectFit: "cover",
//   width: "4rem",
//   height: "4rem",
// }
const card = {
  minWidth: "250px",
  minHeight: "200px",
}
const information = {
  width: "fit-content",
  marginLeft: "16px",
  marginRight: "auto",
  font: "normal normal 500 14px/100% 'Poppins', sans-serif",
}
const value = {
  alignSelf: "center",
  width: "fit-content",
  margin: "0 auto",
  font: "normal normal 600 56px/100% 'Poppins', sans-serif",
}
const unite = {
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "24px",
  font: "normal normal 500 24px/100% 'Poppins', sans-serif",
}
