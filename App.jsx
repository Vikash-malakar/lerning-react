import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";

// 1️⃣ Create Context
const NotificationContext = createContext();

// 2️⃣ Initial State
const initialState = {
  message: "",
  type: "",
  show: false,
};

// 3️⃣ Reducer
function reducer(state, action) {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        message: action.payload.message,
        type: action.payload.type,
        show: true,
      };

    case "HIDE_NOTIFICATION":
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
}

// 4️⃣ Notification Component
function Notification() {
  const { state, dispatch } = useContext(NotificationContext);

  useEffect(() => {
    if (state.show) {
      const timer = setTimeout(() => {
        dispatch({ type: "HIDE_NOTIFICATION" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.show, dispatch]);

  if (!state.show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "15px 20px",
        backgroundColor:
          state.type === "success" ? "green" : "red",
        color: "#fff",
        borderRadius: "5px",
      }}
    >
      {state.message}
    </div>
  );
}

// 5️⃣ Main Component
function Home() {
  const { dispatch } = useContext(NotificationContext);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Notification System</h2>

      <button
        onClick={() =>
          dispatch({
            type: "SHOW_NOTIFICATION",
            payload: {
              message: "Operation Successful!",
              type: "success",
            },
          })
        }
      >
        Show Success
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "SHOW_NOTIFICATION",
            payload: {
              message: "Something went wrong!",
              type: "error",
            },
          })
        }
        style={{ marginLeft: "10px" }}
      >
        Show Error
      </button>

      <Notification />
    </div>
  );
}

// 6️⃣ App Wrapper
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      <Home />
    </NotificationContext.Provider>
  );
}