from datetime import datetime

class ConfidenceRating(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # Link to User table
    video_id = db.Column(db.String(100), nullable=False)  # Unique identifier for each video
    confidence_score = db.Column(db.Integer, nullable=False)  # 1-5 scale
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"ConfidenceRating('{self.user_id}', '{self.video_id}', {self.confidence_score})"
