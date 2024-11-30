import os
from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = ""  

# Folder to store uploaded vids
UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#vid extensions
ALLOWED_EXTENSIONS = {'mp4', 'avi', 'mov', 'wmv'}

#checks allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def upload_form():
    return render_template('videoUpload.html')

@app.route('/upload', methods=['POST'])
def upload_video():
    
    if 'file' not in request.files:     #if the POST request has file part
        flash('No file part')
        return redirect(request.url)

    file = request.files['file']

   
    if file.filename == '':     #if user does not select file
        flash('No selected file')
        return redirect(request.url)

    
    if file and allowed_file(file.filename):            #if file is allowed --> save
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        flash('File successfully uploaded')
        return redirect(url_for('uploaded_file', filename=filename))

    flash('Invalid file type. Only mp4, avi, mov, and wmv are allowed.')
    return redirect(request.url)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    
    return redirect(url_for('static', filename='uploads/' + filename))      #serve uploaded vid file to user

if __name__ == "__main__":
    app.run(debug=True)
