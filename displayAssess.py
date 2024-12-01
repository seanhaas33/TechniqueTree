@app.route('/progress')
def progress():
    user_email = "test@example.com"  # Replace with session or authenticated user's email
    user = User.query.filter_by(email=user_email).first()

    if not user:
        flash("User not found!")
        return redirect('/')

    # Fetch all ratings for the user
    ratings = ConfidenceRating.query.filter_by(user_id=user.id).all()
    if not ratings:
        return "No confidence ratings found."

    # Calculate average confidence per video
    progress_data = {}
    for rating in ratings:
        if rating.video_id not in progress_data:
            progress_data[rating.video_id] = []
        progress_data[rating.video_id].append(rating.confidence_score)

    # Average scores
    progress_summary = {
        video_id: sum(scores) / len(scores)
        for video_id, scores in progress_data.items()
    }

    return render_template('progress.html', progress=progress_summary)
