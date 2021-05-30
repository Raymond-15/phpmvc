$(function() {

  $('.tombolTambahData').on('click', function(){
    $('#formModalLabel').html('Tambah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Tambah Data');
    $('#nama').val();
    $('#nim').val();
    $('#email').val();
    $('#jurusan').val();
    $('#id').val();
    
  });

  $('.tampilModalUbah').on('click', function(){
    $('#formModalLabel').html('Ubah Data Mahasiswa');
    $('.modal-footer button[type=submit]').html('Ubah Data');
    $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');

    const id = $(this).data('id');

    $.ajax({
      url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
      data: {id : id},
      method: 'post',
      dataType: 'json',
      success: function(data){
        $('#nama').val(data.nama);
        $('#nim').val(data.nim);
        $('#email').val(data.email);
        $('#jurusan').val(data.jurusan);
        $('#id').val(data.id);
      }

    });

  });

});

// parallax
$(window).on('load', function(){
	$('.pTengah').addClass('pMuncul');
	$('.hTengah').addClass('hMuncul');
});

$(window).scroll(function() {

	// Parallax bergerak naik keatas jumbotron
	var wScroll = $(this).scrollTop();

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'

	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll +'%)'

	});
});
