import React, { Component } from "react";
import SingleSelect from "../components/SingleSelect";
import MultipleSelect from "../components/MultipleSelect";
import DataTable from "../components/DataTable";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { label: "Jarvis", value: 1 },
        { label: "Jarvis V2", value: 2 }
      ],
      data: [
        {
          name: "Tiger Nixon",
          position: "System Architect",
          salary: "320800",
          start_date: "2011/04/25",
          office: "Edinburgh",
          extn: "5421"
        },
        {
          name: "Garrett Winters",
          position: "Accountant",
          salary: "170750",
          start_date: "2011/07/25",
          office: "Tokyo",
          extn: "8422"
        },
        {
          name: "Ashton Cox",
          position: "Junior Technical Author",
          salary: "86000",
          start_date: "2009/01/12",
          office: "San Francisco",
          extn: "1562"
        },
        {
          name: "Cedric Kelly",
          position: "Senior Javascript Developer",
          salary: "433060",
          start_date: "2012/03/29",
          office: "Edinburgh",
          extn: "6224"
        },
        {
          name: "Airi Satou",
          position: "Accountant",
          salary: "162700",
          start_date: "2008/11/28",
          office: "Tokyo",
          extn: "5407"
        },
        {
          name: "Brielle Williamson",
          position: "Integration Specialist",
          salary: "372000",
          start_date: "2012/12/02",
          office: "New York",
          extn: "4804"
        },
        {
          name: "Herrod Chandler",
          position: "Sales Assistant",
          salary: "137500",
          start_date: "2012/08/06",
          office: "San Francisco",
          extn: "9608"
        },
        {
          name: "Rhona Davidson",
          position: "Integration Specialist",
          salary: "327900",
          start_date: "2010/10/14",
          office: "Tokyo",
          extn: "6200"
        },
        {
          name: "Colleen Hurst",
          position: "Javascript Developer",
          salary: "205500",
          start_date: "2009/09/15",
          office: "San Francisco",
          extn: "2360"
        },
        {
          name: "Sonya Frost",
          position: "Software Engineer",
          salary: "103600",
          start_date: "2008/12/13",
          office: "Edinburgh",
          extn: "1667"
        },
        {
          name: "Jena Gaines",
          position: "Office Manager",
          salary: "90560",
          start_date: "2008/12/19",
          office: "London",
          extn: "3814"
        },
        {
          name: "Quinn Flynn",
          position: "Support Lead",
          salary: "342000",
          start_date: "2013/03/03",
          office: "Edinburgh",
          extn: "9497"
        },
        {
          name: "Charde Marshall",
          position: "Regional Director",
          salary: "470600",
          start_date: "2008/10/16",
          office: "San Francisco",
          extn: "6741"
        },
        {
          name: "Haley Kennedy",
          position: "Senior Marketing Designer",
          salary: "313500",
          start_date: "2012/12/18",
          office: "London",
          extn: "3597"
        },
        {
          name: "Tatyana Fitzpatrick",
          position: "Regional Director",
          salary: "385750",
          start_date: "2010/03/17",
          office: "London",
          extn: "1965"
        },
        {
          name: "Michael Silva",
          position: "Marketing Designer",
          salary: "198500",
          start_date: "2012/11/27",
          office: "London",
          extn: "1581"
        },
        {
          name: "Paul Byrd",
          position: "Chief Financial Officer (CFO)",
          salary: "725000",
          start_date: "2010/06/09",
          office: "New York",
          extn: "3059"
        },
        {
          name: "Gloria Little",
          position: "Systems Administrator",
          salary: "237500",
          start_date: "2009/04/10",
          office: "New York",
          extn: "1721"
        },
        {
          name: "Bradley Greer",
          position: "Software Engineer",
          salary: "132000",
          start_date: "2012/10/13",
          office: "London",
          extn: "2558"
        },
        {
          name: "Dai Rios",
          position: "Personnel Lead",
          salary: "217500",
          start_date: "2012/09/26",
          office: "Edinburgh",
          extn: "2290"
        },
        {
          name: "Jenette Caldwell",
          position: "Development Lead",
          salary: "345000",
          start_date: "2011/09/03",
          office: "New York",
          extn: "1937"
        },
        {
          name: "Yuri Berry",
          position: "Chief Marketing Officer (CMO)",
          salary: "675000",
          start_date: "2009/06/25",
          office: "New York",
          extn: "6154"
        },
        {
          name: "Caesar Vance",
          position: "Pre-Sales Support",
          salary: "106450",
          start_date: "2011/12/12",
          office: "New York",
          extn: "8330"
        },
        {
          name: "Doris Wilder",
          position: "Sales Assistant",
          salary: "85600",
          start_date: "2010/09/20",
          office: "Sydney",
          extn: "3023"
        },
        {
          name: "Angelica Ramos",
          position: "Chief Executive Officer (CEO)",
          salary: "1200000",
          start_date: "2009/10/09",
          office: "London",
          extn: "5797"
        },
        {
          name: "Gavin Joyce",
          position: "Developer",
          salary: "92575",
          start_date: "2010/12/22",
          office: "Edinburgh",
          extn: "8822"
        },
        {
          name: "Jennifer Chang",
          position: "Regional Director",
          salary: "357650",
          start_date: "2010/11/14",
          office: "Argentina",
          extn: "9239"
        }
      ]
    };
  }
  column = [
    {
      Header: "SI.No",
      accessor: "id"
    },
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Position",
      accessor: "position"
    },
    {
      Header: "Salary",
      accessor: "salary"
    },
    {
      Header: "Start Date",
      accessor: "start_date"
    },
    {
      Header: "Office",
      accessor: "office"
    },
    {
      Header: "Extn",
      accessor: "extn"
    }
  ];
  render() {
    return (
      <div>
        <div class="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        <br />
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <a href="#" class="card-link">
              Another link
            </a>
            <SingleSelect options={this.state.options} />
            <br />
            <MultipleSelect options={this.state.options} />
            <br />
            <DataTable data={this.state.data} columnHeading={this.column} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
