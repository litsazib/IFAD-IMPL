import FormStyle from '../../../styles/ContactForm.module.scss';
import { getMailDepartments } from '../../../pages/api/';
import { sendContact } from '../../../pages/api/';
import { isEmpty } from '../../../utils/common';
import swal from 'sweetalert';
import { useEffect, useState, useRef } from 'react';

const PageContactForm = () => {
	const [Department, setDepartment] = useState([]);
	const [Loading, setLoading] = useState(true);

	const loadData = Department.map((dpt, key) => {
		const { id, department_name, mail_address } = dpt;
		return (
			<option key={id} value={mail_address}>
				{department_name}
			</option>
		);
	});

	const [DptName, setDptName] = useState('sales@gmail.com');
	const [FullName, setFullName] = useState('');
	const [Subject, setSubject] = useState('');
	const [Email, setEmail] = useState('');
	const [ContactNum, setContactNum] = useState('');
	const [Massage, setMassage] = useState('');

	let getFullName,
		getSubject,
		getEmail,
		getContactNum,
		getMassage = useRef();

	const reset = () => {
		setFullName('');
		setSubject('');
		setEmail('');
		setContactNum('');
		setMassage('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isEmpty(FullName)) {
			swal('Oops!', 'Full Name Required ');
		} else if (isEmpty(Subject)) {
			swal('Oops!', 'Subject Required ');
		} else if (isEmpty(Email)) {
			swal('Oops!', 'Email Required ');
		} else if (isEmpty(Massage)) {
			swal('Oops!', 'Massage Required ');
		} else {
			let data = {
				DptName,
				FullName,
				Subject,
				Email,
				ContactNum,
				Massage,
			};
			sendContact(data).then((Result) => {
				if (Result === true) {
					reset();
					swal('Send!', 'Email sent successfully', 'success');
					console.log('send sucess');
				} else {
					swal('Oops!', 'Request Fail Try Again');
				}
			});
		}
	};

	useEffect(() => {
		try {
			getMailDepartments().then((Result) => {
				setDepartment(Result);
				setLoading(false);
			});
		} catch (error) {}
	}, []);

	return (
		<>
			<div className="text-center">
				<h2 className="text-light font-Corda fs-2 pt-5  contactline">
					Contact
					<br />
					<span className="font-Corda display-3 round" style={{ color: '#ffa500' }}>
						US
					</span>
				</h2>
			</div>
			<div className="container col-lg-12 col-md-8">
					<p className="text-light text-center contact_title text-center font-corda pb-5 pt-4 fs-5">
						Please take a few moments to fill this application form and we will contact you at the earliest.
					</p>
			</div>
			<div className="container">
				<div className="col-lg-8 col-md-8 col-sm-12 col-xs-8 pt-3 pb-5 contact-form-align">
					<div className="row">
						<div className="selectOption" style={{ display: 'none !important' }}>
							<label htmlFor="inputPassword6" className="font-corda fs-4 pe-3 text-light">
								Purpuse:
							</label>
							<select
								onChange={(e) => {
									setDptName(e.target.value);
								}}
								className="form-select contac_select name rounded-0 shadow"
								aria-label="Default select example"
							>
								{loadData}
							</select>
						</div>
						
						<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div className="form-group">
								<label htmlFor="true" className="form-label text-yellow color font-Corda">
									Full Name:
								</label>
								<input
									value={FullName}
									ref={getFullName}
									onChange={(e) => {
										setFullName(e.target.value);
									}}
									type="text"
									className="form-control mb-3 rounded-0 name bg-transparent shadow"
									placeholder="Enter your full name"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="true" className="form-label text-yellow font-Corda color">
									Subject:
								</label>
								<input
									value={Subject}
									ref={getSubject}
									onChange={(e) => {
										setSubject(e.target.value);
									}}
									type="text"
									className="form-control mb-3 rounded-0 name bg-transparent shadow"
									placeholder="Enter your subject"
								/>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
							<div className="form-group">
								<label htmlFor="true" className="form-label text-yellow font-Corda color">
									Email Address:
								</label>
								<input
									value={Email}
									ref={getEmail}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									type="text"
									className="form-control mb-3 rounded-0 name bg-transparent shadow"
									placeholder="Enter your email"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="true" className="form-label text-yellow font-Corda color">
									Contact Number:
								</label>
								<input
									value={ContactNum}
									ref={getContactNum}
									onChange={(e) => {
										setContactNum(e.target.value);
									}}
									type="text"
									className="form-control mb-3 rounded-0 name bg-transparent shadow"
									placeholder="Enter your number"
								/>
							</div>
						</div>

						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="form-group">
								<label className="form-label text-yellow font-corda color font-Corda">Message:</label>
								<div className="form-group">
									<textarea
										value={Massage}
										ref={getMassage}
										onChange={(e) => {
											setMassage(e.target.value);
										}}
										type="text"
										className="form-control mb-3 rounded-0 name bg-transparent shadow "
										placeholder="Write your message"
										rows="4"
									></textarea>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<button onClick={handleSubmit} className=" text-light fadeInUp w-20 rounded-0 border px-4 py-2 submit-form-hover">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageContactForm;
