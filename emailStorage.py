from flask import Flask, render_template, request, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from email_validator import validate_email, EmailNotValidError

app = Flask(__name__)
#app.secret_key = ""

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f"User('{self.email}')"

# Initialize database
@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/')
def index():
    return redirect('/register')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']

        # Validate email
        try:
            valid = validate_email(email)
            email = valid.email
        except EmailNotValidError as e:
            flash(f"Invalid email address: {str(e)}")
            return redirect('/register')

        # Check if email already exists
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            flash("This email is already registered.")
            return redirect('/register')

        # Save email to database
        new_user = User(email=email)
        db.session.add(new_user)
        db.session.commit()
        flash("Email successfully registered!")
        return redirect('/register')

    return render_template('register.html')

@app.route('/users')
def users():
    """Display all registered users."""
    user_list = User.query.all()
    return render_template('users.html', users=user_list)

if __name__ == "__main__":
    app.run(debug=True)
