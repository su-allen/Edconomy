import React, { Component } from 'react';

class Classroom extends Component {
    constructor(props) {
        super(props);
    }

    getBadges = (student) => {
        let out = "";
        if (student.badges) {
            student.badges.forEach(badge => {
                out += badge + " ";
            });
            out.trim();
        }
        return out;
    }

    render() {
        return (
            <div className="Classroom">
                {this.props.students.sort((o1, o2) => {
                    return o2.ranking || 0 - o1.ranking || 0;
                }).map((student) =>
                    <div className={"StudentListView" + (student.ranking <= 3 ? student.ranking : "")} key={student.name}>
                        <span className="Stats" style={{color: (student.frame_color === 'Black' ? "White" : "Black")}}>{`${student.ranking}. `}</span>
                        <span className="Stats" style={{color: student.name_color}}>{student.name}</span>
                        <span className="Stats" style={{color: (student.frame_color === 'Black' ? "White" : "Black")}}>{" " + student.total_points}</span>
                    </div>
                )}
            </div>
        );
    }
}

export default Classroom;
