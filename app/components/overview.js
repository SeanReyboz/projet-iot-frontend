import React from "react"
import { Chart } from "react-chartjs-2"
import { useFetch } from "../hooks/useFetch"
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
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
)
import styles from "../styles/NavBar.module.scss"

export default function Overview({ list, ...styles }) {
  const { isLoading, data } = useFetch("http://localhost:8888/stats")
  const Pression_average =
    isLoading || Math.round(data["pressions"]["average"] / data["totalSeance"])
  console.log(Pression_average)
  return (
    isLoading || (
      <OverviewItem
        styles={styles}
        api={data}
        Pression_average={Pression_average}
      />
    )
  )
}
const labels = ["1", "2", "2", "4", "5", "6", "7"]

const OverviewItem = ({ item, styles, api, Pression_average }) => {
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
      {console.log(api)}

      <section>
        <div className={styles.ProfileEdit}>
          <img
            src="//picsum.photos/100/100"
            alt="Profile picture"
            className={styles.profilePic}
          />
          {/* <img
            src="icons/image_edit.svg"
            alt="Profile picture"
            className={styles.profilePicEdit}
          /> */}
          <div className={styles.ProfileInfo}>
            <div>
              <p>John Doe</p>
            </div>
            <div>
              <p className={styles.Age}> 21 ans</p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          marginBottom: "24px",
          marginTop: "0px",
        }}
      >
        <h2
          style={{
            font: "normal normal 500 28px/110% 'Poppins', sans-serif",
            margin: "24px 0",
          }}
        >
          Aperçu
        </h2>
        <div
          style={{
            display: "flex",
            gap: "32px",
            flexDirection: "column",
          }}
        >
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.card_info}>Nombre de séance</h3>
              <p className={styles.card_value}>{api["totalSeance"]}</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card_info}>BPM moyen</h3>
              <div className={styles.card_value}>
                {console.log(api)}
                <p style={{ margin: "auto" }}>{api["bpm"]["average"]}</p>
                <img
                  src="icons/arrow_data.svg"
                  alt=""
                  style={{
                    marginLeft: "16px",
                    marginRight: "4px",
                    width: "18px",
                    height: "fit-content",
                    alignSelf: "center",
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    height: "fit-content",
                    alignSelf: "center",
                    paddingBottom: "6px",
                  }}
                >
                  -2
                </p>
              </div>
              <p className={styles.card_unite}></p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card_info}>Durée des séances</h3>
              <div className={styles.card_value}>
                <p style={{ margin: "auto" }}>{api["duration"]["average"]}</p>
                <img
                  src="icons/arrow_data.svg"
                  alt=""
                  style={{
                    marginLeft: "16px",
                    marginRight: "4px",
                    width: "18px",
                    height: "fit-content",
                    alignSelf: "center",
                    transform: "rotate(180deg)",
                  }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    height: "fit-content",
                    alignSelf: "center",
                    lineHeight: "initial",
                  }}
                >
                  +3
                </p>
              </div>
              <p className={styles.card_unite}>min</p>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.card_info}>Appareil connecté</h3>
              <p className={styles.card_value}>3</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card_info}>Nombre de pression moyen</h3>
              <p className={styles.card_value}>{Pression_average}</p>
              <p className={styles.card_unite}>/min</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card_info}>Bien être après séance</h3>
              <p className={styles.card_value}>67</p>
              <p className={styles.card_unite}>%</p>
            </div>
          </div>
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
