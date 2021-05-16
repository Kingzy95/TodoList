<?php 

include 'config.php';

$sql = "SELECT * FROM tasks";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {

?>

    <li><?php echo $row['title']; ?>        
    <button><i id="doneBtn" class="fa fa-check" date-id="<?php echo $row['id']; ?>"></i></button>
    <button><i id="removeBtn" class="fa fa-trash" data-id="<?php echo $row['id']; ?>"></i></button></li>

<?php
    }
    echo '<div class="pending-text">Vous avez ' . mysqli_num_rows($result) . ' taches à accomplir.</div>';
} else {
    echo "<li><span class='text'>Vous n'avez pas rentrez de liste.</span></li>";
}

?>