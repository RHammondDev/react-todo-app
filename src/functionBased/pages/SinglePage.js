import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {
  
    const aboutData = [
        {
          slug: "about-app",
          title: "About the App",
          description:
            "In this application you can perform Create, Read, Update, and Delete operations on Todo list items. You can also edit items in the todo list by double-clicking on them and then press enter when you are finished. This application takes advantage of your browsers localStorage to persist the data in the todo list.",
        },
        {
          slug: "about-author",
          title: "About the Author",
          description:
            "This app was developed by Robin Hammond following the React Tutorial by Ibas Majid @ https://ibaslogic.com/react-tutorial-for-beginners/. The React Routing within this tutorial is based on React Router version 5 which is outdated. I have refactored the code and updated the routing to the newer React Router version 6.3.0",
        },
      ]

    const { slug } = useParams()
    const aboutContent = aboutData.find(item => item.slug === slug)
    const { title, description } = aboutContent
    //console.log(useParams())

    return (
      <div className="main__content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )
}
export default SinglePage