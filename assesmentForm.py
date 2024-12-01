@app.route('/assess/<video_id>', methods=['GET', 'POST'])
def assess(video_id):
    user_email = "test@example.com"  # Replace with session or authenticated user's email
    user = User.query.filter_by(email=user_email).first()

    if not user:
        flash("User not found!")
        return redirect('/')

    if request.method == 'POST':
        confidence_score = int(request.form['confidence'])

        # Validate confidence score
        if not (1 <= confidence_score <= 5):
            flash("Confidence score must be between 1 and 5.")
            return redirect(f'/assess/{video_id}')

        # Store confidence rating in the database
        new_rating = ConfidenceRating(
            user_id=user.id,
            video_id=video_id,
            confidence_score=confidence_score
        )
        db.session.add(new_rating)
        db.session.commit()

        flash("Your confidence rating has been saved!")
        return redirect('/progress')  # Redirect to a progress page

    return render_template('assess.html', video_id=video_id)
