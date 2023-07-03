import { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className='pt-4'>
        <div className='container px-lg-5'>
            <div className="row gx-lg-5">
                <div className="col-lg-4 mb-5">
                    <div className='bg-light h-100 card-content'>
                        <div id="card-wrapper" className='text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                            <div id='boxIcon' className='bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                <i className='bi bi-collection'></i>
                            </div>
                            <h2 className='fs-4 fw-bold pt-5'>Fresh new layout</h2>
                            <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className='bg-light h-100 card-content'>
                        <div id="card-wrapper" className='text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                            <div id='boxIcon' className='bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                <i className='bi bi-cloud-download'></i>
                            </div>
                            <h2 className='fs-4 fw-bold pt-5'>Free to download</h2>
                            <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className='bg-light h-100 card-content'>
                        <div id="card-wrapper" className='text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                            <div id='boxIcon' className='bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                <i className='bi bi-card-heading'></i>
                            </div>
                            <h2 className='fs-4 fw-bold pt-5'>Jumbotron hero header</h2>
                            <p>The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className='bg-light h-100 card-content'>
                        <div id="card-wrapper" className='text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                            <div id='boxIcon' className='bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                <i className='bi bi-bootstrap'></i>
                            </div>
                            <h2 className='fs-4 fw-bold pt-5'>Feature boxes</h2>
                            <p>We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className='bg-light h-100 card-content'>
                        <div id="card-wrapper" className='text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                            <div id='boxIcon' className='bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                <i className='bi bi-code'></i>
                            </div>
                            <h2 className='fs-4 fw-bold pt-5'>Simple clean code</h2>
                            <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className='bg-light h-100 card-content'>
                        <div id="card-wrapper" className='text-center p-4 p-lg-5 pt-0 pt-lg-0'>
                            <div id='boxIcon' className='bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4'>
                                <i className='bi bi-patch-check'></i>
                            </div>
                            <h2 className='fs-4 fw-bold pt-5'>A name you trust</h2>
                            <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
