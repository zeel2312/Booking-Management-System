'use client';
import 'bootstrap/dist/css/bootstrap.css';
import './page.css';

import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import CircleProgress from "@/components/CircleProgress";
import ShowingCard from "@/components/ShowingCard";
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0/client";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";

function Rewards() {
    const { user, isLoading } = useUser();

    return (
        <>
            {isLoading && <Loading />}
            {user && (
                <>
                    <main>
                        <div className="container-fluid p-0">
                            <div className="row-fluid p-0 text-light">
                                <div className="row-fluid p-0">
                                    <div className="border-0">
                                        <Container className="m-auto mt-5 mb-5 p-5 rounded bg-dark bg-opacity-75">
                                            <Row className="gx-1">
                                                <Col className="col-12 col-md-6">
                                                    <Col className="col-12 text-center m-auto p-4">
                                                        <Row className="bg-darker rounded p-5 popcorn">
                                                            <h2 className="mb-4">Membership</h2>
                                                            <Col className="col-12 mb-3">
                                                                <p className="m-0 fw-bold">{user.name}</p>
                                                                <p className="m-0">{user.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")}</p>
                                                                <p className="m-0">Registered May 2021</p> {/* TODO - Get this data from somewhere */}
                                                                <a href="/profile" className="m-0 golden" style={{fontSize: '0.75rem'}}>View Profile</a>
                                                            </Col>
                                                            <Col className="col-12">
                                                                <p className="m-0 fw-bold fs-5"><span className="golden"><svg className="d-inline  bi flex-shrink-0" width="22" height="22" role="img"><use xlinkHref="#award"/></svg> Platinum</span> (since June 2021)</p>
                                                                <a href="" className="m-0 golden" style={{fontSize: '0.75rem'}}>Billing Settings</a>
                                                                <p className="m-0 fw-bold mt-3 fs-5 mb-2">Thank you for being a loyal member!<br/>Enjoy the following rewards:</p>
                                                                <ul className="text-center p-0 m-0" style={{listStylePosition: 'inside', fontSize: '0.9rem'}}>
                                                                    <li>Exclusive Premier Showings</li>
                                                                    <li>Unlimited Soda Refills</li>
                                                                    <li>Free Large Popcorn</li>
                                                                    <li>Waived Ticket Fees</li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col className="col-12 text-center m-auto p-4">
                                                        <Row className="bg-darker rounded p-5">
                                                            <h2 className="mb-4">Rewards Points</h2>
                                                            <Col className="col-12">
                                                                <CircleProgress bgColor="yellow" percentage="45"></CircleProgress>
                                                            </Col>
                                                            <p className="mt-4 mb-0">
                                                                <span className="">450/1000 Points</span>
                                                                <br></br>
                                                                <br></br>
                                                                Watch A Movie, Earn More Points!
                                                            </p>
                                                        </Row>
                                                    </Col>
                                                </Col>
                                                <Col className="col-12 col-md-6 text-center m-auto p-4">
                                                    <Row className="bg-darker rounded p-5" style={{maxHeight: '59rem', overflow: 'scroll'}}>
                                                        <h2 className="mb-4"><svg className="d-inline bi flex-shrink-0 me-2 mb-1 golden" width="22" height="22" role="img"><use xlinkHref="#award"/></svg>Premier Showings</h2>
                                                        <ShowingCard title="Premier Showing #1" date="22 February 2024" time="7:20pm" runtime="1hr 55min" linkToBuy="#" linkToMovieImg="assets/movie2.jpg" showingLocation="Indianapolis #5" orientationRight={true}></ShowingCard>
                                                        <ShowingCard title="Premier Showing #2" date="25 January 2024" time="10:45pm" runtime="1hr 55min" linkToBuy="#" linkToMovieImg="assets/movie3.jpg" showingLocation="Bloomington #2" orientationRight={false}></ShowingCard>
                                                        <ShowingCard title="Premier Showing #3" date="1 December 2023" time="11:35am" runtime="1hr 55min" linkToBuy="#" linkToMovieImg="assets/movie4.jpg" showingLocation="Chicago #1" orientationRight={true}></ShowingCard>
                                                        <ShowingCard title="Premier Showing #4" date="7 November 2023" time="6:20pm" runtime="1hr 55min" linkToBuy="#" linkToMovieImg="assets/movie5.jpg" showingLocation="Louisville #3" orientationRight={false}></ShowingCard>
                                                        <ShowingCard title="Premier Showing #5" date="12 November 2023" time="8:30am" runtime="1hr 55min" linkToBuy="#" linkToMovieImg="assets/movie6.jpg" showingLocation="Chicago #3" orientationRight={true}></ShowingCard>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </>
            )}
        </>
    );
}

export default withPageAuthRequired(Rewards, {
    onRedirecting: () => <Loading />,
    onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});