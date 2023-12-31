import Pigeon from "../../images/dove4.svg";
import "./Contact.css";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Audio from "../../videos/zachwyca.mp3";

export default class Form extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
  };

  // handle inputs

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastname = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  // end of handle inputs

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("/api/forma", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not send");
      });
  };

  // for reseting the form data
  resetForm = () => {
    this.setState({
      name: "",
      lastname: "",
      message: "",
      email: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };
  render() {
    return (
      <>
        <Link to="/" className="pigeon">
          <img src={Pigeon} alt="gołąb" />
        </Link>
        <ReactAudioPlayer src={Audio} autoPlay controls className="sound" />
        <span className="center">
          <b>"Zachwyca mnie mój Bóg</b>
          <p>słowa św. W. Pallotti</p>
          <p>śpiew klerycy z Ołtarzewa</p>
        </span>
        <div className="container-1">
          <form onSubmit={this.formSubmit}>
            <div className="singleItem">
              <label htmlFor="name">Imię</label>
              <input
                type="text"
                name="name"
                className="name"
                value={this.state.name}
                onChange={this.handleName}
                placeholder="Twoje imię ..."
                required
              />
            </div>
            <div className="singleItem">
              <label htmlFor="lastname">Nazwisko</label>
              <input
                type="text"
                name="lastname"
                className="lastname"
                value={this.state.lastname}
                onChange={this.handleLastname}
                placeholder="Twoje nazwisko ..."
                required
              />
            </div>
            <div className="singleItem">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="email"
                value={this.state.email}
                onChange={this.handleEmail}
                placeholder="Twój email ..."
                required
              />
            </div>
            <div className="textArea singleItem">
              <label htmlFor="message">Wiadomość</label>
              <textarea
                name="message"
                value={this.state.message}
                id=""
                cols="30"
                rows="5"
                placeholder="Twoja wiadomość ..."
                onChange={this.handleMessage}
                required
              ></textarea>
            </div>
            <div className={this.state.sent ? "msg msgAppear" : "msg"}>
              Wiadomość wysłana
            </div>
            <div className="btn-1">
              <button type="submit">
                <a href="mailto:mparodysta@gmail.com">Wyślij</a>
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
