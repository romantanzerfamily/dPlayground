actor class Backend() {
  stable var counter = 0;

  type Note = {
    author : Text;
    title : Text;
    text : Text;
  };

  stable var note : Note = {
    author = "Roman";
    title = "first note";
    text = "this is the content of my first note! hoorah!";
  };

  // Get the current count
  public query func get() : async Nat {
    counter;
  };

  // Increment the count by one
  public func inc() : async () {
    counter += 3;
  };

  // Add `n` to the current count
  public func add(n : Nat) : async () {
    counter += n;
  };

  // Update the title of the note
  public func saveTitle(t : Text) : async () {
    note := { note with title = t };
  };

  // Get the entire note object
  public query func getNote() : async Note {
    note;
  };
};
