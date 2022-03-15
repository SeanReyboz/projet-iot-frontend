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
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
)

export default function Params({ list, ...styles }) {
  return <Param styles={styles} />
}
const labels = ["1", "2", "2", "4", "5", "6", "7"]

const Param = ({ styles }) => {
  return (
    <>
      <section
        style={{
          marginBottom: "24px",
          marginTop: "0px",
        }}
      >
        <h2
          style={{
            font: "normal normal 500 28px/110% 'Poppins', sans-serif",
            margin: "48px 0",
          }}
        >
          Profile
        </h2>
        <div className={styles.beside}>
          <div className={styles.inputs}>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7FBEC",
              }}
            >
              <div>
                <p className={styles.labels}>Name :</p>
                <p>Jhon Doe</p>
              </div>
              <img src="icons/text_edit.svg"></img>
            </div>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7FBEC",
              }}
            >
              <div>
                <p className={styles.labels}>Age :</p>
                <p>21</p>
              </div>
              <img src="icons/text_edit.svg"></img>
            </div>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7FBEC",
              }}
            >
              <div>
                <p className={styles.labels}>Mail :</p>
                <p>Jhon.Doe@univ-smb.fr</p>
              </div>
              <img src="icons/text_edit.svg"></img>
            </div>
          </div>
          <div className={styles.inputs}>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7FBEC",
              }}
            >
              <div>
                <p className={styles.labels}>Sexe :</p>
                <p>Male</p>
              </div>
              <img src="icons/text_edit.svg"></img>
            </div>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7FBEC",
              }}
            >
              <div>
                <p className={styles.labels}>Weight :</p>
                <p>80</p>
                <p>kg</p>
              </div>
              <img src="icons/text_edit.svg"></img>
            </div>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7FBEC",
              }}
            >
              <div>
                <p className={styles.labels}>Size :</p>
                <p>185</p>
                <p>cm</p>
              </div>
              <img src="icons/text_edit.svg"></img>
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
        <div className={styles.beside}>
          <div className={styles.inputs}>
            <h2
              style={{
                font: "normal normal 500 28px/110% 'Poppins', sans-serif",
                margin: "24px 0",
              }}
            >
              Connected devices
            </h2>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7F2FB",
              }}
            >
              <div>
                <p>Samsung s12</p>
              </div>
              <img src="icons/text_edit.svg"></img>
            </div>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7F2FB",
              }}
            >
              <div>
                <p>Acer nitro 5 </p>
              </div>
              <img src="icons/text_edit.svg"></img>
            </div>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#E7F2FB",
              }}
            >
              <div>
                <p>iPhone 11 Pro of Jhon</p>
              </div>
              <img src="icons/text_edit.svg"></img>
            </div>
          </div>
          <div className={styles.inputs}>
            <h2
              style={{
                font: "normal normal 500 28px/110% 'Poppins', sans-serif",
                margin: "24px 0",
              }}
            >
              Privacy
            </h2>
            <div
              className={styles.input}
              style={{
                backgroundColor: "#EFE7FB",
              }}
            >
              <div>
                <p className={styles.labels}>
                  Tracking and personalization for advertising
                </p>
              </div>
              <img src="icons/toogle.svg"></img>
            </div>
            <div
              className={styles.input_privacy}
              style={{
                backgroundColor: "#EFE7FB",
              }}
            >
              <div>
                <p>Terms</p>
              </div>
            </div>
            <div
              className={styles.input_privacy}
              style={{
                backgroundColor: "#EFE7FB",
              }}
            >
              <div>
                <p>Acknowledgements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
