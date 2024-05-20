import moment from 'moment'
import { FaPrint, FaPlus, FaTimes } from 'react-icons/fa'
import { useState, useRef, Fragment } from 'react'
import { Inter } from 'next/font/google'
import { useReactToPrint } from 'react-to-print'
import Head from 'next/head'

const TodoComponent = () => (
  <tr className="font-semibold">
    <td className="py-2">
      <select
        className="outline-none appearance-none cursor-pointer"
        defaultValue="Meetings"
      >
        <option value="Meetings">Meetings</option>
        <option value="Focused">Focused</option>
        <option value="Meals/Breaks">Meals/Breaks</option>
        <option value="Unfocused">Unfocused</option>
        <option value="Focused">Focused</option>
        <option value="Close">Close</option>
      </select>
    </td>
    <td>
      <input type="time" className="outline-none" />
    </td>
    <td>
      <input
        type="text"
        placeholder="Specify your task"
        className="outline-none"
      />
    </td>
    <td>
      <input
        type="number"
        defaultValue={15}
        step={15}
        min="1"
        max="480"
        className="outline-none"
      />
    </td>
    <td>
      <input
        type="checkbox"
        className="cursor-pointer text-black"
        defaultChecked
      />
    </td>
  </tr>
)

export default function Home() {
  const [todoList, setTodoList] = useState<JSX.Element[]>([<TodoComponent />])

  const handleAddTodoList = () => {
    setTodoList([...todoList, <TodoComponent />])
  }

  const handleResetTodoList = () => {
    setTodoList([<TodoComponent />])
  }

  const supadayTodoRef = useRef<any>()

  const handlePrintPreview = useReactToPrint({
    content: () => supadayTodoRef.current
  })

  return (
    <Fragment>
      <Head>
        <title>Supaday Todo App</title>
        <meta
          name="author"
          content="FastStartup Developer <diaz@faststartup.io>"
        />
      </Head>
      <main
        className={`flex flex-col items-center text-black mt-4`}
        ref={supadayTodoRef}
      >
        <div className="flex flex-col gap-5 w-full">
          <input
            className="text-4xl font-bold italic text-center outline-none"
            defaultValue={moment().format('dddd MMMM D, YYYY').toUpperCase()}
          />
          <h1 className="text-8xl font-bold text-center">SUPADAY</h1>
          <input
            className="text-center outline-none uppercase font-semibold italic text-xl"
            defaultValue={
              'MAXIMUM PRODUCTIVITY: ACHIEVE MORE, WORK LESS, AND ENJOY LIFE!'
            }
          />

          <table className="text-left w-[75%] mx-auto">
            <thead>
              <tr>
                <th>Time Habit</th>
                <th>Start Time</th>
                <th>Tasks to Do During This Time</th>
                <th># of Minutes</th>
                <th>Do it</th>
              </tr>
            </thead>
            <tbody>{todoList}</tbody>
          </table>
        </div>
      </main>
      <div
        onClick={handleResetTodoList}
        className="fixed bottom-36 right-4 p-3 bg-red-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-red-600"
      >
        <FaTimes size={24} />
      </div>
      <div
        onClick={handleAddTodoList}
        className="fixed bottom-20 right-4 p-3 bg-green-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-green-600"
      >
        <FaPlus size={24} />
      </div>
      <div
        onClick={handlePrintPreview}
        className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-600"
      >
        <FaPrint size={24} />
      </div>
    </Fragment>
  )
}
