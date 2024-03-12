'use client';
import 'bootstrap/dist/css/bootstrap.css';
import './page.css';

import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import {Container} from "react-bootstrap";
import CircleProgress from "@/components/CircleProgress";
import OrderCard from "@/components/OrderCard";

function Profile() {
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
                                                <Row className="bg-darker rounded">
                                                    <Row className="p-5">
                                                        <Col className="col-12 mb-3">
                                                            <img src={user.picture} alt="Profile" className="m-auto rounded-circle img-fluid profile-picture mb-3 mb-md-0" decode="async" data-testid="profile-picture"/><br/>
                                                            <p className="m-0 fw-bold">{user.name}</p>
                                                            <p className="m-0">{user.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")}</p>
                                                            <p className="m-0">Registered May 2021</p> {/* TODO - Get this data from somewhere */}
                                                            {user.sub.includes('oauth') ? <a href="#" className="m-0 golden" style={{fontSize: '0.8rem'}}>Connected to Google</a> : null}
                                                        </Col>
                                                        <Col className="col-12">
                                                            <p className="m-0 fw-bold fs-5"><span className="golden"><svg className="d-inline  bi flex-shrink-0" width="22" height="22" role="img"><use xlinkHref="#award"/></svg> Platinum</span> (since June 2021)</p>
                                                            <a href="" className="m-0 golden" style={{fontSize: '0.75rem'}}>Billing Settings</a>
                                                        </Col>
                                                    </Row>
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
                                                        <a href="/rewards" className="golden">Manage Your Rewards</a>
                                                    </p>
                                                </Row>
                                            </Col>
                                        </Col>
                                        <Col className="col-12 col-md-6 text-center m-auto p-4">
                                            <Row className="bg-darker rounded p-5" style={{maxHeight: '52rem', overflow: 'scroll'}}>
                                                <h2 className="mb-4">Order History</h2>
                                                <OrderCard title="History Item #1" date="12 February 2023" time="5:20pm" cost="15.54" linkToMovieImg="assets/movie2.jpg" showingLocation="Indianapolis #12"></OrderCard>
                                                <OrderCard title="History Item #2" date="11 February 2023" time="7:15pm" cost="23.54" linkToMovieImg="assets/movie3.jpg" showingLocation="Chicago #12"></OrderCard>
                                                <OrderCard title="History Item #3" date="10 February 2023" time="1:20pm" cost="24.21" linkToMovieImg="assets/movie4.jpg" showingLocation="Bloomington #12"></OrderCard>
                                                <OrderCard title="History Item #4" date="9 February 2023" time="11:45am" cost="56.37" linkToMovieImg="assets/movie5.jpg" showingLocation="Louisville #12"></OrderCard>
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

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
